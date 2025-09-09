interface LemonSqueezyType {
    Url: {
        Open: (checkoutUrl?: string) => void;
    };
}

interface Window {
    createLemonSqueezy: () => void;
    LemonSqueezy: LemonSqueezyType;
}