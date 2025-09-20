import { HeaderSection } from '@/components/layout/header-section';
import {
  CpuIcon,
  FingerprintIcon,
  PencilIcon,
  Settings2Icon,
  SparklesIcon,
  ZapIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * https://nsui.irung.me/features
 * pnpm dlx shadcn@canary add https://nsui.irung.me/r/features-4.json
 */
export default function Features3Section() {
  const t = useTranslations('HomePage.features');

  return (
    <section id="features3" className="px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-8 lg:space-y-20">
        <HeaderSection
          title={t('title')}
          subtitle={t('subtitle')}
          subtitleAs="h2"
          description={t('description')}
          descriptionAs="p"
        />

        <div className="relative mx-auto grid divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ZapIcon className="size-4" />
              <h3 className="text-base font-medium">{t('items.0.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('items.0.description')}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CpuIcon className="size-4" />
              <h3 className="text-base font-medium">{t('items.1.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('items.1.description')}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FingerprintIcon className="size-4" />

              <h3 className="text-base font-medium">{t('items.2.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('items.2.description')}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PencilIcon className="size-4" />

              <h3 className="text-base font-medium">{t('items.3.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('items.3.description')}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2Icon className="size-4" />

              <h3 className="text-base font-medium">{t('items.0.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('items.0.description')}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SparklesIcon className="size-4" />

              <h3 className="text-base font-medium">{t('items.1.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('items.1.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
