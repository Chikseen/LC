export class Dates {
	static convert(payload: Date): String {
		let date = new Date(payload);
		return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
	}
}
