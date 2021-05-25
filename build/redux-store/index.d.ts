import { Types as counterTypes } from "./counter/types";
declare const _default: {
    counter: {
        actions: {
            incCounter: () => {
                type: counterTypes;
            };
            decCounter: () => {
                type: counterTypes;
            };
            resetCount: () => {
                type: counterTypes;
            };
        };
        types: typeof counterTypes;
    };
};
export default _default;
