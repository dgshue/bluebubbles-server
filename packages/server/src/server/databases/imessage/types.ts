export type DBMessageParams = {
    chatGuid?: string;
    offset?: number;
    limit?: number;
    after?: Date | number;
    before?: Date | number;
    withChats?: boolean;
    withChatParticipants?: boolean;
    withAttachments?: boolean;
    includeCreated?: boolean;
    sort?: "ASC" | "DESC";
    orderBy?: string;
    where?: DBWhereItem[];
    // When false, skip the extra COUNT(*) round-trip; the returned total is
    // reported as -1 to signal "not computed".  Useful for client pagination
    // calls that only care about the page contents.
    withCount?: boolean;
};

export type DBWhereItem = {
    statement: string;
    // Allow arrays for IN-clauses; TypeORM accepts string|number|array values.
    args: { [key: string]: string | number | Array<string | number> };
};

export type ChatParams = {
    chatGuid?: string;
    globGuid?: boolean;
    withParticipants?: boolean;
    withLastMessage?: boolean;
    withArchived?: boolean;
    offset?: number;
    limit?: number;
    where?: DBWhereItem[];
    orderBy?: string;
};

export type HandleParams = {
    address?: string;
    offset?: number;
    limit?: number;
};
