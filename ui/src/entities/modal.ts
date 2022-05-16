
interface IModalActionsContent {
    click: string;
    text: string;
}

export interface IModalActionsItems {
    value: string;
    text: string;
}

export interface IModalTypeContent {
    key: string;
    label: string;
    type: string;
    text?: string;
    variant: 'outlined' | 'standard' | 'filled';
    items?: IModalActionsItems[];
}


export interface IModalSettings {
        titleBtn: string;
        title: string;
        textContent: string;
        typeContent: IModalTypeContent[];
        actionsContent: IModalActionsContent[];
 }
 
export interface IModalData {
    [key: string]: string | number | boolean
}
export interface modalState {
    modalData: IModalData;
    status: boolean;
}

export interface IDataState {
    [key: string] : string
}
