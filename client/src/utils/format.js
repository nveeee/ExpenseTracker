export const numberWithCommas = (x) => {
    return `${x < 0 ? '-' : x > 0 ? '+' : ''}$${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")[0] === '-' ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(1) : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
