import shuffle from 'lodash/shuffle'
import { ReactElement, useMemo } from 'react'
import CompetitionBanner from '../CompetitionBanner'
import { FeeRefundBanner } from '../FeeRefundBanner'
import { GalxeTraverseBanner } from '../GalxeTraverseBanner'
import GameBanner from '../GameBanner'
import { ListaIFOBanner } from '../ListaIFOBanner'
import { MultiChainBanner } from '../MultichainBanner'
import { NemesisDownfallBanner } from '../NemesisDownfallBanner'
import { OptionsBanner } from '../OptionsBanner'
import { PaymasterBanner } from '../PaymasterBanner'
import PerpetualBanner from '../PerpetualBanner'
import UserBanner from '../UserBanner'
import { V4InfoBanner } from '../V4InfoBanner'
import { VeCakeBanner } from '../VeCakeBanner'
import WebNotificationBanner from '../WebNotificationBanner'
import useIsRenderCompetitionBanner from './useIsRenderCompetitionBanner'
import useIsRenderIfoBanner from './useIsRenderIFOBanner'
import useIsRenderUserBanner from './useIsRenderUserBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */

export const useMultipleBannerConfig = () => {
  const isRenderCompetitionBanner = useIsRenderCompetitionBanner()
  const isRenderUserBanner = useIsRenderUserBanner()
  const shouldRenderIfoBanner = useIsRenderIfoBanner()

  return useMemo(() => {
    const NO_SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender: isRenderUserBanner.shouldRender && !isRenderUserBanner.isEarningsBusdZero,
        banner: <UserBanner />,
      },
      { shouldRender: shouldRenderIfoBanner, banner: <ListaIFOBanner /> },
      {
        shouldRender: true,
        banner: <PaymasterBanner />,
      },
      {
        shouldRender: true,
        banner: <FeeRefundBanner />,
      },
      {
        shouldRender: true,
        banner: <MultiChainBanner />,
      },
      {
        shouldRender: true,
        banner: <OptionsBanner />,
      },
      { shouldRender: true, banner: <VeCakeBanner /> },
      {
        shouldRender: true,
        banner: <V4InfoBanner />,
      },
      {
        shouldRender: true,
        banner: <NemesisDownfallBanner />,
      },
    ]

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      { shouldRender: true, banner: <GalxeTraverseBanner /> },
      { shouldRender: true, banner: <WebNotificationBanner /> },
      { shouldRender: true, banner: <GameBanner /> },
      {
        shouldRender: isRenderCompetitionBanner,
        banner: <CompetitionBanner />,
      },
      {
        shouldRender: true,
        banner: <PerpetualBanner />,
      },
    ]
    return [
      ...NO_SHUFFLE_BANNERS,
      ...shuffle(SHUFFLE_BANNERS),
      {
        // be the last one if harvest value is zero
        shouldRender: isRenderUserBanner.shouldRender && isRenderUserBanner.isEarningsBusdZero,
        banner: <UserBanner />,
      },
    ]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [
    shouldRenderIfoBanner,
    isRenderCompetitionBanner,
    isRenderUserBanner.isEarningsBusdZero,
    isRenderUserBanner.shouldRender,
  ])
}
