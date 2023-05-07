import React from 'react';
import { ReactDOM } from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/int-firebase'
import { CommentCollectionRef } from '../lib/firestore.collections'
import CommentBox from 'comment-box-react';
 
const themeOptions = {
  COLORS: {
    highlight: '#fff',
    background: '#faf2c7'
  }
};

export interface ISnap {
  id: string
  data: any
}
 
const labels = {
  label: 'Leave your comment here:',
  placeholder: 'Messages',
  submit: 'Submit'
};


 
const CommentBoxShow = () => {
  const [Message, setMessage] = useState('');
  const [Firstname, setFirstname] = useState('')
  const [createdDate, setcreatedDate] = useState(new Date())
  const [listeComment, setLC] = useState<any>();

  function getComments () {
    // const clientCollectionRef = collection(db, 'Client');
    console.log('Mandalo eto')
    getDocs(CommentCollectionRef)
        .then (response =>{
        const comments = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }));
        setLC(comments);
    })
    .catch(error => console.log(error.message))
  }
  if (listeComment){
    listeComment.map((cc:any) => {
      const date = cc.data.createdDate;
      console.log(date)
    })
  }
  console.log('fin')
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);


    if (Firstname === '') {
      return
    }

    const docRef = await addDoc(CommentCollectionRef, { Firstname, Message, createdDate });
    // console.log(docRef.id);
    // docRef.
    // addDoc(CommentCollectionRef, { Firstname, Message, createdDate })
    //   .then(response => {
    //     console.log('response', response.firestore.toJSON)
    //   })
    //   .catch(error => {
    //     console.log(error.message)
    //   })
    // alert('comment sent')
    // console.log({
    //   Firstname: data.get('Firstname'),
    //   Message: data.get('Message'),
    //   CreatedDate: data.get('CreatedDate')

    // });
    getComments();

  }
  return (
    <CommentBox
      userObjects={[
        {
          username: 'df-username',
          avatar_url:
            'https://secure.gravatar.com/avatar/f04241571d95d005e4a54f4278670718?d=mm',
          name: 'John Doe'
        }
      ]}
      labels={labels}
      onSubmit={handleSubmit}
      themeOptions={themeOptions}
    />
  );
};
 
export default CommentBoxShow;

const ShowComments = () => {
  const [dateState, setDateState] = useState(new Date());
  const dateNow = 
  dateState.toLocaleDateString('en-GB', {
       day: 'numeric',
       month: 'short',
       year: 'numeric',
    })
        const timeNow =  
        dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })

  return (
    <div>
      <p> Edited when {dateNow}</p>
      <p> At {timeNow}</p>
    </div>
  )
}



