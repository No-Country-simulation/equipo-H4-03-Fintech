import AssetList from "./AssetList";
import BarMenu from './BarMenu'

export default function AssetListPanel () {
  return (
    <div id="panel" className="w-full flex flex-col items-center justify-center">
      <BarMenu />
      <AssetList />
    </div>
  )
}
