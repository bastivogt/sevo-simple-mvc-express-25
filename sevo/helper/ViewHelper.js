module.exports = {
    csrfTokenInputField(token) {
        return `<input type="hidden" name="_csrf" value="${token}" />`;
    },
};
