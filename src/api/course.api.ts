import apiClient from './axios'
import { resolveImageUrl } from './config'
import type { CourseRecord, CourseApiItem, ApiResponse } from '../types/course'
import { tabs } from '../types/course'

function normalizeCategory(type?: string): CourseRecord['category'] {
  if (type && (tabs as readonly string[]).includes(type)) {
    return type as CourseRecord['category']
  }

  return 'Optometry & Vision Sciences'
}

function toSlug(id?: string, name?: string) {
  if (id) return id
  if (!name) return 'course-unknown'

  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function getCourses(signal?: AbortSignal): Promise<CourseRecord[]> {
  const response = await apiClient.get<ApiResponse<CourseApiItem[]>>('/courses/all', {
    signal,
  })

  const body = response.data

  if (!body || typeof body !== 'object') {
    throw new Error('Invalid Course API response format')
  }

  if (!('success' in body) || !body.success || !Array.isArray(body.data)) {
    throw new Error('Invalid Course API response payload')
  }

  return (body.data as CourseApiItem[]).map((item) => ({
      slug: toSlug(item._id, item.name),
      title: item.name ?? 'Untitled Course',
      description:
        item.CourseOverview || item.courseRoll || 'No description available',
      image:
        item.imageUrl && typeof item.imageUrl === 'string'
          ? resolveImageUrl(item.imageUrl)
          : '/course/course_thumbnail/default.png',
      brochurePdf: undefined,
      category: normalizeCategory(item.type),
      college: item.college ?? 'Unknown college',
      university: item.university ?? 'Unknown university',
      fees: '—',
      admissionFee: '—',
      registrationFee: undefined,
      ugcApproved: item.status === 'Active',
      highlights:
        item.courseHighlights && typeof item.courseHighlights === 'string'
          ? item.courseHighlights.split(',').map((s) => s.trim())
          : [],
      overview: item.CourseOverview ?? '',
      roleOfCourse: item.courseRoll ?? '',
      syllabus:
        item.syllabus && typeof item.syllabus === 'string'
          ? item.syllabus.split(',').map((s) => s.trim())
          : [],
      eligibility: item.eligibility ?? 'N/A',
      duration: item.duration ?? 'N/A',
      careerOutcomes:
        item.careerOutcomes && typeof item.careerOutcomes === 'string'
          ? item.careerOutcomes.split(',').map((s) => s.trim())
          : [],
    }))
}

export async function getCategories(signal?: AbortSignal): Promise<string[]> {
  const response = await apiClient.get<ApiResponse<{ name?: string }[]>>('/categories/all', {
    signal,
  })

  const body = response.data

  if (!body || typeof body !== 'object') {
    throw new Error('Invalid Category API response format')
  }

  if (!('success' in body) || !body.success || !Array.isArray(body.data)) {
    throw new Error('Invalid Category API response payload')
  }

  return (body.data as { name?: string }[])
    .map((item) => item.name ?? '')
    .filter((name): name is string => Boolean(name))
}


