import { db } from '@/lib/firebase'
import { getDoc, doc } from 'firebase/firestore'
import { z } from 'zod'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'

const schema = z.object({
	author: z.string(),
	createdAt: z.coerce.date(),
	dislikes: z.number(),
	downloadUrl: z.string().url(),
	id: z.string().uuid(),
	isPrivate: z.boolean(),
	likes: z.number(),
	showable: z.boolean(),
	slug: z.string(),
	title: z.string(),
	updatedAt: z.coerce.date(),
	views: z.number(),
})

export default async function Page({
	params,
}: { params: { lang: string; slug: string } }) {
	const { userId } = auth()

	if (!userId) {
		return notFound()
	} else {
		const data = await clerkClient().users.getUser(userId)
		console.log(data)
	}

	console.log(userId)

	return (
		<div className="w-screen h-full items-center justify-center">
			<h1 className="text-3xl flex py-4 items-center justify-center">
				Page
			</h1>
			<p className="prose flex dark:prose-invert font-semibold max-w-screen-md  ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Laborum, error. Hic debitis, consequatur esse minima quasi,
				nobis ea a expedita quas at quod iusto numquam quaerat fugit
				assumenda, illum ex. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Ducimus optio eos facilis, illo voluptas
				provident cupiditate repudiandae beatae! Quae adipisci possimus
				fuga dolorem tenetur delectus quos placeat quaerat, tempora
				nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Maiores illo ipsa dolor quod perspiciatis molestias
				distinctio aspernatur excepturi culpa impedit ducimus at error
				dolore commodi veritatis ut, architecto sunt. Quisquam? Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Dolor,
				labore? Sunt reiciendis iure et assumenda omnis aliquam facere
				doloremque cumque nemo itaque fugit, aliquid eos quisquam
				consequatur! Natus, consequatur autem. Lorem ipsum dolor, sit
				amet consectetur adipisicing elit. A nobis ipsa ipsam, iste ea
				itaque doloribus similique ratione mollitia consequatur quaerat
				hic? Cum eos corrupti nisi ullam minima architecto aliquam.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
				nam quidem ipsa optio nostrum sequi placeat, amet fuga,
				obcaecati unde blanditiis architecto cupiditate autem quas
				recusandae voluptatum quaerat vel! Quibusdam! Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Dicta, porro facere?
				Magni maxime, vero odit debitis sapiente enim totam adipisci
				assumenda animi fuga magnam iusto fugiat esse dolorum in
				praesentium! Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Vero asperiores molestias voluptas magnam quo, expedita
				aliquid suscipit, adipisci delectus eos corrupti facere deserunt
				eveniet explicabo ipsa. Tempora placeat enim dignissimos. Lorem
				ipsum dolor sit amet, consectetur adipisicing elit. Odio dolorum
				earum vero maxime unde minus repellendus molestiae quibusdam.
				Iure accusamus rerum facere quae quos ipsam quam perspiciatis
				aspernatur nobis? Tenetur? Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Hic praesentium nesciunt
				dignissimos magni! Recusandae odio quos laboriosam voluptate
				consequuntur ut, molestiae voluptates et odit, architecto quasi
				facilis, blanditiis magni ipsam?
			</p>
		</div>
	)
}
