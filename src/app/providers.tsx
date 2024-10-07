// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { env } from '@/env'
import { useEffect } from 'react'

export function PHProvider({
	children,
}: {
	children: React.ReactNode
}) {
	useEffect(() => {
		posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
			api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
			person_profiles: 'identified_only',
			capture_pageview: false, // Disable automatic pageview capture, as we capture manually
			capture_pageleave: true,
			capture_performance: true,
			capture_heatmaps: true,
		})
	}, [])

	return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
