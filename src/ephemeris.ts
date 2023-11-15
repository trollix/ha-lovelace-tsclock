import { SAINT_OF_A_DAY_FR} from './ephemeris_constants'

export class Ephemeris {
    
    // ... autres propriétés et méthodes ...
    /**
     * Get the month raw output.
     *
     * @param {number} month - Integer from 1 to 12.
     * @returns {string[][] | undefined} - A two-dimensional array representing the month's raw output, or undefined if the parameter is invalid.
     */
    private static getMonth(month: number): string[][] | undefined {

      if (month === 1)
        return SAINT_OF_A_DAY_FR.january;
      if (month === 2)
        return SAINT_OF_A_DAY_FR.february;
      if (month === 3)
        return SAINT_OF_A_DAY_FR.march;
      if (month === 4)
        return SAINT_OF_A_DAY_FR.april;
      if (month === 5)
        return SAINT_OF_A_DAY_FR.may;
      if (month === 6)
        return SAINT_OF_A_DAY_FR.june;
      if (month === 7)
        return SAINT_OF_A_DAY_FR.july;
      if (month === 8)
        return SAINT_OF_A_DAY_FR.august;
      if (month === 9)
        return SAINT_OF_A_DAY_FR.september;
      if (month === 10)
        return SAINT_OF_A_DAY_FR.october;
      if (month === 11)
        return SAINT_OF_A_DAY_FR.november;
      if (month === 12)
        return SAINT_OF_A_DAY_FR.december;

        return undefined;

    }

    static getEphemeris(day:number, month:number): string | undefined {
  
        try {
            const monthData = Ephemeris.getMonth(month);
            if (!monthData) {
                return undefined; // Mois invalide
            }

            const saintOfDay = monthData[day - 1];
            if (!saintOfDay) {
                return undefined; // Données indisponibles pour le jour spécifié
            }

            const prefix = saintOfDay[1];
            return (prefix === '') ? saintOfDay[0] : `${prefix} ${saintOfDay[0]}`;

        } catch (err) {
            console.error("Une erreur s'est produite :", err);
            return undefined;
        }
    }

    static getEphemerisName(day:number, month:number): string | undefined {
  
      try {
          const monthData = Ephemeris.getMonth(month)?.[day - 1][0];
          if (!monthData) {
              return undefined; // Mois invalide
          } else {
              return monthData;
          }
      } catch (err) {
          console.error("Une erreur s'est produite :", err);
          return undefined;
      }
    }
}