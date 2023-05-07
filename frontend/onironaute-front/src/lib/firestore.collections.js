import {collection} from 'firebase/firestore'
import {db} from './int-firebase'

export const clientCollectionRef = collection(db, 'Client')
export const CommentCollectionRef = collection(db, 'Comments')