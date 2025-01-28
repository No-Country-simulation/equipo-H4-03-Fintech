package com.iupi.iupiback.investments.mapper;

import com.iupi.iupiback.investments.dto.request.AssetRequest;
import com.iupi.iupiback.investments.dto.response.AssetResponse;
import com.iupi.iupiback.investments.models.Asset;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AssetMapper {

    AssetResponse toResponse(Asset asset);

    Asset toAsset(AssetRequest assetRequest);
}
