export default {
    getNumberFormatted(val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getTotalPages(data) {
        return Array(data)
            .fill()
            .map((v, i) => i + 1);
    }
}