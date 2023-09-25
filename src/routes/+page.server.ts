import db from '$lib/db';
import type { ObjectId } from 'mongodb';
import type { as } from 'vitest/dist/reporters-5f784f42';

export type Figure = {
	id: string;
	name: string;
	price: number;
};

export async function load() {
	const figures = await db.collection<Figure>('figtrack').find().toArray();
	return {
		figures: figures.map(
			({ _id, ...rest }) =>
				({
					...rest,
					id: _id.toString()
				} as Figure)
		)
	};
}
