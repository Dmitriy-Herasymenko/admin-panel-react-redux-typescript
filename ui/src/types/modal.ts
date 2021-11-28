
interface IModalActionsContent {
    click: string;
    text: string;
}

interface IModalActionsItems {
    value: string;
    text: string;
}

interface IModalTypeContent {
    key: string;
    label: string;
    type: string;
    text?: string;
    variant: 'outlined' | 'standard' | 'filled';
    items?: IModalActionsItems[];
}

export interface IModalSettings {
    settings: {
        titleBtn: string;
        title: string;
        textContent: string;
        typeContent: IModalTypeContent[];
        actionsContent: IModalActionsContent[];
    }
}

export interface modalState {
    modalData: {[key: string]: string};
    status: boolean;
}