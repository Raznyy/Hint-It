

export interface Question {
    key?: string; // Key provided from database
    title: string; // Title of question
    content: string; // Description of question
    lat: number; // Latitude
    lng: number; // Longtitude
    timestamp: number; // Timestamp with time of creation
    author: string; // Author user id
    answers: Array<string> // List of answers
}

export interface Answer {
    key?: string; // Key provided from database
    content: string; // Description of answer
    voteCount: number; // Latitude
    upvotes: Array<string>; // List of user id's
    downvotes: Array<string>; // List of user id's
    timestamp: number; // Timestamp with time of creation
    author: string; // Author user id
}