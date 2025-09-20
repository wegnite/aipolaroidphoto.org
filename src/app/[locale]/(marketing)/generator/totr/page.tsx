import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale, shouldAppendLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { redirect } from 'next/navigation';

const TARGET_PATH = '/ai/polaroid/generator';

function getLocalizedTarget(locale: Locale): string {
  return shouldAppendLocale(locale) ? `/${locale}${TARGET_PATH}` : TARGET_PATH;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  return constructMetadata({
    title: 'AI Polaroid Generator — Edit Photos with Vintage Film Styles',
    description:
      'Use the AI polaroid generator to transform photos with instant film borders, captions, and Gemini-powered style presets.',
    canonicalUrl: getUrlWithLocale(TARGET_PATH, locale),
    noIndex: true,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  redirect(getLocalizedTarget(locale));
}
