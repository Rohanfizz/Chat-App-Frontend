export class Reaction {
    constructor(public thumbsUp: number, public heart?: number) {
      // Add more reactions if needed
    }
  }
  
export class Participant {
    constructor(
      public userId: string,
      public displayName: string,
      public unread: number
    ) {}
  }
  enum ReadStatus {
    Seen = 'Seen',
    Delivered = 'Delivered',
  }
export class Message {
    constructor(
      public messageId: string,
      public senderId: string,
      public timestamp: string,
      public content: string,
      public readStatus: string,
      public reactions: Reaction
    ) {}
  }
  
export class Chat {
    constructor(
      public chatId: string,
      public chatName: string,
      public participants: Participant[],
      public messages: Message[]
    ) {}
  }