import { getLessonBySlug } from '$lib/data/lessons'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params

  // get post with metadata
  const lesson = getLessonBySlug(slug)

  if (!lesson) {
    throw error(404, 'Post not found')
  }

  return {
    ...lesson,
    lock: true,
  }
}