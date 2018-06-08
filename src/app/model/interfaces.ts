export interface QuestionDraft {
    title: string;
    content: string;
}

export interface Map<T>{
    [key: string]: T;
}