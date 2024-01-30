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
  genre: String;
  mainCharacter: String;
  startDate?: Date;
  endDate?: Date;
  eventUrl?: String;
  memo?: any;

  constructor(
    id: number,
    eventName: String,
    genre: String,
    mainCharacter: String,
    startDate?: Date,
    endDate?: Date,
    eventUrl?: String,
    memo?: any,
  ) {
    this.id = id;
    this.eventName = eventName;
    this.genre = genre;
    this.mainCharacter = mainCharacter;
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
      'PLAVE',
      '한노아',
      new Date('2024-02-01'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      'princess diary : 한노아 생일카페',
      'PLAVE',
      '한노아',
      new Date('2024-02-01'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      'princess diary : 한노아 생일카페',
      'PLAVE',
      '한노아',
      new Date('2024-02-01'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      'princess diary : 한노아 생일카페',
      'PLAVE',
      '한노아',
      new Date('2024-02-01'),
      new Date('2024-02-04'),
    ),
    new EventData(
      1,
      'princess diary : 한노아 생일카페',
      'PLAVE',
      '한노아',
      new Date('2024-02-01'),
      new Date('2024-02-04'),
    ),
  ],
  5,
  10,
  0,
);
