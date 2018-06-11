import { Map } from "./interfaces";


export interface Question {
    key?: string; // Key provided from database
    title: string; // Title of question
    content: string; // Description of question
    lat: number; // Latitude
    lng: number; // Longtitude
    timestamp: number; // Timestamp with time of creation
    author: string; // Author user id
    answers: Array<string> // List of answers
    voteCount: number; // Latitude
    score: number;  // Total score
    votes: Map<number>; // List of user id's with 1 or -1 values
}

export interface Answer {
    key?: string; // Key provided from database
    content: string; // Description of answer
    timestamp: number; // Timestamp with time of creation
    author: string; // Author user id
    voteCount: number; // Latitude
    score: number;  // Total score
    votes: Map<number>; // List of user id's with 1 or -1 values
}