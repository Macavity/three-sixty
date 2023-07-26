import { Question } from '../../types/Question';
import { TeamValue } from '../../types/TeamValue';
import { Connotation } from '../../types/Connotation';

export type QuestionDataRow = (string | number)[];

export class QuestionFactory {
  static createFromRawDataRow(row: QuestionDataRow): Question {
    try {
      return {
        title: row[0].toString(),
        value: TeamValue[row[1]] as TeamValue,
        connotation: Connotation[row[2]] as Connotation,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static createFromRawDataRows(rows: QuestionDataRow[]) {
    return rows.map((row) => QuestionFactory.createFromRawDataRow(row));
  }
}
