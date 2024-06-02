import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    return {
        form: {
            step: 1,
        },
    };
};