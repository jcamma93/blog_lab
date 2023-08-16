export interface Author {
    id?: number;
    name: string;
    email: string;
    // password?: string;
    _created?: string | Date;
}

export interface Tag {
    id?: number;
    name: string;
    _created?: string | Date;
}

export interface BlogTag {
    blogid: Blog["id"];
    tagid: Tag["id"];
}

export interface Blog {
    id?: number;
    title: string;
    content: string;
    authorid: Author["id"];
    _created?: string | Date;
}

export interface BlogWithAuthor extends Blog {
    authorname: Author['name'];
    email: Author["email"];
}

