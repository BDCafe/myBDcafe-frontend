export class EventJson {
  content: Array<EventData>;
  count: number;
  size: number;
  page: number;

  constructor(
    content: Array<EventData>,
    count: number,
    size: number,
    page: number,
  ) {
    this.content = content;
    this.count = count;
    this.size = size;
    this.page = page;
  }
}

class EventData {
  id: number;
  eventName: String;
  category?: [genre: String, mainCharacter: String];
  startDate?: Date;
  endDate?: Date;
  eventUrl?: String;
  memo?: any;

  constructor(
    id: number,
    eventName: String,
    category?: [genre: String, mainCharacter: String],
    startDate?: Date,
    endDate?: Date,
    eventUrl?: String,
    memo?: any,
  ) {
    this.id = id;
    this.eventName = eventName;
    this.category = category;
    this.startDate = startDate;
    this.endDate = endDate;
    this.eventUrl = eventUrl;
    this.memo = memo;
  }
}

export const testJson = new EventJson(
  [
    new EventData(
      1,
      'princess diary : 한노아 생일카페',
      ['PLAVE', '한노아'],
      new Date('2024-02-01'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      '빛놔줘(𝒟𝓇𝑜𝓅) : PLAVE 노아 생일 플라워샵',
      ['PLAVE', '한노아'],
      new Date('2024-02-02'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      'purple Line : 플레이브 한노아 생일 칵테일바',
      ['PLAVE', '한노아'],
      new Date('2024-02-02'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      'My Violet Noah 2024 노아 생일카페',
      ['PLAVE', '한노아'],
      new Date('2024-02-03'),
      new Date('2024-02-05'),
    ),
    new EventData(
      1,
      '𝐍𝐨𝐈𝐂𝐄 𝐃𝐀𝐘(놔이스데이) | PLAVE 한노아 생일카페',
      ['PLAVE', '한노아'],
      new Date('2024-02-03'),
      new Date('2024-02-04'),
    ),
  ],
  5,
  10,
  0,
);
