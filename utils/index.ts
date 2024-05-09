// Utility Functions

// TRUNCATES(SHORTENS) LONG STRINGS
export function truncate(str: string, n: number) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};
// e.g  truncate(title, 30)

// CONVERTS DOB FORMAT FROM ISO 8601 to DD-MMM-YYYY
export const timeConverter = (UNIX_timestamp: string) => {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
};

// CONVERTS A STRING TO A URL-FRIENDLY SLUG
export function convertToSlug(text: string) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

// CONVERTS A STRING TO TITLE CASE
export function toTitleCase(text: string) {
    return text.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() });
};