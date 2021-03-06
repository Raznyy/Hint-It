import { Map } from "./interfaces";


export interface Question {
    key?: string; // Key provided from database
    title: string; // Title of question
    content: string; // Description of question
    lat: number; // Latitude
    lng: number; // Longtitude
    timestamp: number; // Timestamp with time of creation
    author: string; // Author user id
    authorName: string // Author display name
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
    authorName: string // Author display name
    voteCount: number; // Latitude
    score: number;  // Total score
    votes: Map<number>; // List of user id's with 1 or -1 values
}

export interface User {
    key?: string; // Key provided from database
    username: string;
    email: string;
    avatar: string;
    answers: Map<string>,
    created: number,
    score: number
}