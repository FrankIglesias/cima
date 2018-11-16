module.exports = (function() {
  const inscription = {};
  inscription.subjects = [];
  inscription.alternatives = [];
  inscription.pickedAlternatives = [];
  inscription.availableTurns = {
    m: true,
    t: true,
    n: true
  };
  inscription.availableDays = {
    Lu: true,
    Ma: true,
    Mi: true,
    Ju: true,
    Vi: true,
    Sa: true
  };
  inscription.availableTurnsInDays = {
    Lu: { m: true, t: true, n: true },
    Ma: { m: true, t: true, n: true },
    Mi: { m: true, t: true, n: true },
    Ju: { m: true, t: true, n: true },
    Vi: { m: true, t: true, n: true },
    Sa: { m: true, t: true, n: true }
  };

  inscription.generateAlternatives = function() {
    inscription.alternatives = [];
    let subjectsToProcess = inscription.subjects;
    const currentAlternative = [];
    const currentAvailability = getAvailableHoursInDays();

    function processNextSubject() {
      const currentSubject = subjectsToProcess.pop();
      const optionalRound = currentSubject.isOptional || false;
      for (let i = 0; i < currentSubject.schedules.length + optionalRound; i++) {
        let schedule = {
          active: true,
          days: []
        };

        if (i != currentSubject.schedules.length) {
          schedule = currentSubject.schedules[i];
        }

        if (scheduleMeetsFilters(schedule)) {
          markScheduleAsBusy(schedule);
          currentAlternative.push({
            subject: currentSubject,
            schedule
          });
          if (subjectsToProcess.length) {
            processNextSubject();
          } else {
            const finalAlternative = {};
            finalAlternative.schedules = currentAlternative.slice();
            addPickedStatusFromStorage(finalAlternative);
            inscription.alternatives.push(finalAlternative);
          }
          currentAlternative.pop();
          markScheduleAsAvailable(schedule);
        }
      }

      subjectsToProcess.push(currentSubject);
    }

    function scheduleMeetsFilters(schedule) {
      return (
        schedule.active &&
        scheduleFitsAlternative(schedule) &&
        scheduleIsInAvailableTurns(schedule) &&
        scheduleIsInAvailableDays(schedule) &&
        scheduleIsInAvailableTurnsInDays(schedule)
      );
    }

    function scheduleFitsAlternative(schedule) {
      for (let i = 0; i < schedule.days.length; i++) {
        const day = schedule.days[i];
        for (let h = day.startHour; h < day.endHour + 1; h++) {
          if (!currentAvailability[day.name][day.turn][h]) {
            return false;
          }
        }
      }
      return true;
    }

    function markScheduleAsBusy(schedule) {
      for (let i = 0; i < schedule.days.length; i++) {
        const day = schedule.days[i];
        for (let h = day.startHour; h < day.endHour + 1; h++) {
          currentAvailability[day.name][day.turn][h] = false;
        }
      }
    }

    function markScheduleAsAvailable(schedule) {
      for (let i = 0; i < schedule.days.length; i++) {
        const day = schedule.days[i];
        for (let h = day.startHour; h < day.endHour + 1; h++) {
          currentAvailability[day.name][day.turn][h] = true;
        }
      }
    }

    function getCurrentAlternativeDays() {
      let currentDays = [];
      for (let i = 0; i < currentAlternative.length; i++) {
        currentDays = currentDays.concat(currentAlternative[i].schedule.days);
      }
      return currentDays;
    }

    function scheduleIsInAvailableTurns(schedule) {
      for (let i = 0; i < schedule.days.length; i++) {
        if (!inscription.availableTurns[schedule.days[i].turn]) {
          return false;
        }
      }
      return true;
    }

    function scheduleIsInAvailableDays(schedule) {
      for (let i = 0; i < schedule.days.length; i++) {
        if (!inscription.availableDays[schedule.days[i].name]) {
          return false;
        }
      }
      return true;
    }

    function scheduleIsInAvailableTurnsInDays(schedule) {
      for (let i = 0; i < schedule.days.length; i++) {
        const day = schedule.days[i].name;
        const turn = schedule.days[i].turn;
        if (!inscription.availableTurnsInDays[day][turn]) {
          return false;
        }
      }
      return true;
    }

    function addPickedStatusFromStorage(alternative) {
      if (inscription.pickedAlternatives) {
        for (let i = 0; i < inscription.pickedAlternatives.length; i++) {
          const picked = inscription.pickedAlternatives[i];
          const pickedCopy = { schedules: picked.schedules };
          if (alternativesAreEqual(alternative, pickedCopy)) {
            alternative.pickedNumber = picked.pickedNumber;
            return;
          }
        }
      }
    }

    function alternativesAreEqual(alt1, alt2) {
      return JSON.stringify(alt1) == JSON.stringify(alt2);
    }

    function removeSubjectsWithNoSchedules() {
      subjectsToProcess = subjectsToProcess.filter(subject =>
        subject.schedules.some(schedule => schedule.active)
      );
    }

    removeSubjectsWithNoSchedules();

    if (subjectsToProcess.length) {
      processNextSubject();
    }
  };

  function getAvailableHoursInDays() {
    const hoursInDay = function() {
      return {
        m: [true, true, true, true, true, true, true],
        t: [true, true, true, true, true, true, true],
        n: [true, true, true, true, true, true]
      };
    };
    return {
      Lu: hoursInDay(),
      Ma: hoursInDay(),
      Mi: hoursInDay(),
      Ju: hoursInDay(),
      Vi: hoursInDay(),
      Sa: hoursInDay()
    };
  }

  function findStoragePickedAlternative(alternative) {
    if (inscription.pickedAlternatives) {
      for (let i = 0; i < inscription.pickedAlternatives.length; i++) {
        const picked = inscription.pickedAlternatives[i];
        const pickedCopy = { schedules: picked.schedules };
        const alternativeCopy = { schedules: alternative.schedules };
        if (JSON.stringify(pickedCopy) == JSON.stringify(alternativeCopy)) {
          return picked;
        }
      }
    }
  }

  inscription.subjectsStorageKey = '_alternativity_subjects';
  inscription.pickedAlternativesStorageKey = '_alternativity_picked_alternatives';

  inscription.persistSubjects = function() {
    localStorage.setItem(this.subjectsStorageKey, JSON.stringify(this.subjects));
  };

  inscription.persistPickedAlternatives = function() {
    for (let i = 0; i < this.alternatives.length; i++) {
      const alternative = this.alternatives[i];
      const pickedAlternative = findStoragePickedAlternative(alternative);
      if (alternative.pickedNumber) {
        if (pickedAlternative) {
          pickedAlternative.pickedNumber = alternative.pickedNumber;
        } else {
          this.pickedAlternatives.push(this.alternatives[i]);
        }
      }

      if (!alternative.pickedNumber && pickedAlternative) {
        const index = this.pickedAlternatives.indexOf(pickedAlternative);
        this.pickedAlternatives.splice(index, 1);
      }
    }
    localStorage.setItem(this.pickedAlternativesStorageKey, JSON.stringify(this.pickedAlternatives));
  };

  inscription.loadFromStorage = function() {
    this.subjects = this.subjectsFromStorage() || [];
    this.subjects.forEach(subject => {
      subject.schedules.forEach(schedule => {
        schedule.days.forEach(day => {
          if (day.startHour === undefined) {
            day.startHour = 1;
          }
          if (day.endHour === undefined) {
            day.endHour = 5;
          }
        });
      });
    });
    this.pickedAlternatives = this.alternativesFromStorage() || [];
  };

  inscription.isPersisted = function() {
    return !!this.subjectsFromStorage();
  };

  inscription.subjectsFromStorage = function() {
    return JSON.parse(localStorage.getItem(this.subjectsStorageKey));
  };

  inscription.alternativesFromStorage = function() {
    return JSON.parse(localStorage.getItem(this.pickedAlternativesStorageKey));
  };
  return inscription;
})();
