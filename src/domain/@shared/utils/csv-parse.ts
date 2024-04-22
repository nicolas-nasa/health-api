import { parse } from 'csv-parse';

class ReadCSV {
  constructor() {}

  public async execute(
    file: Buffer,
    columns: Array<string>,
    delimiter: string,
  ): Promise<Array<any>> {
    let data: any[];

    await new Promise((resolve, reject) => {
      parse(file, {
        delimiter,
        columns,
      })
        .on('error', () => {
          throw new Error('Parse error');
        })
        .on('data', row => {
          if (data === undefined) data = [];
          data.push(row);
        })
        .on('end', () => {
          resolve(data);
        });
    });

    return data;
  }
}

export default ReadCSV;
