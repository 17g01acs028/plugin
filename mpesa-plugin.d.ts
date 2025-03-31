import { Component, VNode } from "preact";
export interface MpesaConfig {
    apiKey: string;
    apiEndpoint: string;
    onSuccess?: (response: PaymentResponse) => void;
    onError?: (error: Error) => void;
    ui?: {
        primaryColor?: string;
        secondaryColor?: string;
        backgroundColor?: string;
        textColor?: string;
        borderRadius?: string;
        fontFamily?: string;
        buttonStyle?: "rounded" | "square" | "pill";
        modalWidth?: string;
        showLogo?: boolean;
        logoUrl?: string;
        customStyles?: string;
    };
}
export interface PaymentModalProps {
    isOpen: boolean;
    amount: number;
    narration: string;
    onClose: () => void;
    onSubmit: (phone: string) => Promise<void>;
    ref?: (ref: PaymentModal | null) => void;
    config?: MpesaConfig;
}
export interface PaymentResponse {
    transactionId: string;
    status: string;
    message: string;
    resultCode?: string;
    resultDesc?: string;
}
interface PaymentModalState {
    phone: string;
    isSubmitting: boolean;
    error: string;
    isConfirming: boolean;
    confirmationMessage: string;
    isFullScreenLoading: boolean;
    loadingStage: string;
}
declare class PaymentModal extends Component<PaymentModalProps, PaymentModalState> {
    state: PaymentModalState;
    constructor(props: PaymentModalProps);
    componentDidMount(): void;
    private adjustColor;
    updateState: (newState: Partial<typeof this.state>) => void;
    handleSubmit: (e: Event) => Promise<void>;
    handleCancel: () => void;
    render(): VNode<any> | null;
}
declare class MpesaPlugin {
    private config;
    private modalRoot;
    private state;
    private currentPromise;
    private modalComponent;
    constructor(config: MpesaConfig);
    private showModal;
    private hideModal;
    private renderModal;
    private validatePhone;
    private formatPhone;
    private pollTransactionStatus;
    private processPayment;
    processDirectPayment(amount: number, phone: string, narration: string): Promise<PaymentResponse>;
    pay(amount: number, narration: string): Promise<PaymentResponse>;
    destroy(): void;
}
declare global {
    interface Window {
        MpesaPlugin: typeof MpesaPlugin;
    }
}
export {};
