import { ReplaceTarget } from './ReplaceTarget';
export declare class Replacer {
    protected readonly originSrc: string;
    node: any;
    replaceTargetList: ReplaceTarget[];
    constructor(data: any);
    matchMediaCallback(): void;
    replaceCheck(): void;
}
