import { useState, useEffect } from "react";
import { assetsInitialState } from "./data";
import AssetItem from "./AssetItem";
import AssetsItemMenu from "./AssetsItemMenu";

export default function AssetList() {

  useEffect(() => {
    const handleClickOutside = (event) => {
      const $menu = document.getElementById('assetsMenu')
      if ($menu && !$menu.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const [showMenu, setShowMenu] = useState(false)
  const [assets, setAssets] = useState(assetsInitialState)
  const [selected, setSelected] = useState()
  
  const handleOpenMenu = id => {
    const newSelected = assets.findIndex(asset => asset.id === id)
    setSelected(newSelected)
    setShowMenu(prev => !prev)
  }

  const handleMenuClick = (name, set) => {
    const newAssets = [...assets]
    newAssets[selected][name] = set
    setAssets(newAssets)
  }

  return (
    <div className="relative h-full items-center">
      <div className={`
        w-[600px] h-[55px] flex items-center justify-center
        gap-14 pl-[73px] pr-10 pt-4 pb-4
      `}>
        <span className="font-normal text-base text-black">
          Símbolo
        </span>
        <span className="font-normal text-base text-center text-black">
          Última cotización
        </span>
        <span className="font-normal text-base text-center text-black">
          Variación diaria
        </span>
      </div>
      {
        assets.map(asset => <>
          <div
            className="w-[600px] h-0.5 bg-muted"
            key={asset.id}
          />
          <AssetItem
            key={asset.id}
            handler={handleOpenMenu}
            title={asset.title}
            ticker={asset.ticker}
            currency={asset.currency}
            quote={asset.quote}
            variation={asset.variation}
            assetId={asset.id}
          />
        </>)
      }

      <div id="assetsMenu" className={`
        w-full flex justify-center bg-white 
        pb-[30px] rounded-tl-[28px] rounded-tr-[28px]
        fixed bottom-0 left-0 right-0 z-10
        transform transition-transform duration-300 ease-in-out
        ${showMenu ? 'translate-y-0 border-t-[1px]' : 'translate-y-full border-t-0'}
      `}>
        <AssetsItemMenu close={setShowMenu} handler={handleMenuClick} selected={assets[selected]} />
      </div>
    </div>
  )
}
