export interface Rating {
    id: string;
    movieId: string;
    userId: string;
    score: number;
    ratedAt: Date;
}