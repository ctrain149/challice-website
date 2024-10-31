'use client';

import { Dns, Instagram } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import Sidebar from '../components/misc/Sidebar';
import Textfield from '../components/inputs/Textfield';
import Button from '../components/controls/Button';

const contentClassnames = [
  'flex',
  'justify-start',
  'items-between',
  'gap-6',
  'h-full',
  'w-full',
  'p-6',
  'bg-gray-200',
  'border',
  'border-gray-400',
  'rounded-md',
  'dark:bg-slate-800',
  'dark:border-slate-600',
];

const insetClassnames = [
  'flex',
  'items-center',
  'justify-between',
  'p-5',
  'border-2',
  'border-dashed',
  'shadow-run-app-light',
  'dark:shadow-run-app-dark',
  'rounded-lg',
  'text-lg',
  'animated-dashed-border',
];

const postContainerClassnames = [
  'flex',
  'flex-col',
  'items-center',
  'gap-4',
  'w-80',
  'p-5',
  'border',
  'border-gray-400',
  'rounded',
  'shadow-emboss',
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState('');

  async function savePost() {
    try {
      const body = { caption };
      const response = await fetch('/api/post/create', { body });

      setPosts(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchPosts() {
    try {
      const response = await fetch('/api/posts');

      console.log('response :>> ', response);

      setPosts(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function renderPosts() {
    return posts.map((post) => {
      return (
        <div className="flex flex-col gap-4 border border-gray-400 rounded" key={post.id}>
          <span className="font-bold">{post.id}</span>

          <span>{post.caption}</span>
        </div>
      );
    });
  }

  return (
    <main className="flex-1 w-full">
      <div className="flex flex-col self-center gap-4 w-full h-full p-5 md:flex-row">
        <Sidebar />

        <div className={contentClassnames.join(' ')}>
          <div className="flex flex-col gap-6 p-4">
            <div className="text-lg">
              Welcome to my interactive web application, where you can explore my programming and
              design skills through a mock Instagram platform. In this project, you'll have the
              ability to generate or manually create your own fake posts, allowing you to populate
              the app just like you would on a real social media platform. The focus is on
              demonstrating how to build an engaging, user-friendly interface, while also showcasing
              the underlying code that brings it all to life. Every feature is a testament to my
              development abilities, from front-end design to back-end data processing. Dive in and
              see how easy it is to create and customize your posts, all while getting a glimpse
              into what goes on behind the scenes in a modern web application.
            </div>

            <div className={insetClassnames.join(' ')}>
              <Instagram /> Instagram application a716557483-as222349581 mounted <Dns />
            </div>

            <div className={postContainerClassnames.join(' ')}>
              <h1 className="text-xl font-bold">Let&lsquo;s create a new post!</h1>

              <Textfield label="Caption" onChange={(e) => setCaption(e.value)} />

              <Button label="Post" onClick={savePost} />
            </div>

            {renderPosts()}
          </div>
        </div>
      </div>
    </main>
  );
}
