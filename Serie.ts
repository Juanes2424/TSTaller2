export class Serie {
    id: number;
    title: string;
    network: string;
    seasons: number;
    genre: string;
    website: string;
    imageUrl: string;
  
    constructor(id: number, title: string, network: string, seasons: number, genre: string, website: string, imageUrl: string) {
      this.id = id;
      this.title = title;
      this.network = network;
      this.seasons = seasons;
      this.genre = genre;
      this.website = website;
      this.imageUrl = imageUrl;
    }
  }