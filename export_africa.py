#!/usr/bin/env python3
"""
export_africa.py

Usage in GitHub Codespaces:
  1. pip install geopandas
  2. python export_africa.py

Output:
  Generates africa_highlighted.geojson in current directory
"""

import geopandas as gpd

# Natural Earth 1:110m Admin 0 – Countries ZIP URL
URL = "https://naciscdn.org/naturalearth/110m/cultural/ne_110m_admin_0_countries.zip"

# ISO-A3 codes for the 27 African countries to highlight
ISO_CODES = [
    "BFA", "BDI", "CPV", "CAF", "TCD", "COM", "COD",
    "COG", "DJI", "GNQ", "ERI", "SWZ", "GIN", "GNB",
    "CIV", "LBR", "LBY", "MLI", "MRT", "STP", "SYC",
    "SOM", "SSD", "SDN", "TGO", "ZWE"
]


def main():
    # Load country boundaries from online ZIP
    world = gpd.read_file(URL)

    # Inspect columns if needed:
    # print(world.columns)

    # Filter to Africa and selected ISO codes (use uppercase field names)
    africa = world[world["CONTINENT"] == "Africa"]
    highlighted = africa[africa["ISO_A3"].isin(ISO_CODES)]

    # Reproject to WGS84 and save as GeoJSON
    highlighted = highlighted.to_crs(epsg=4326)
    highlighted.to_file(
        "africa_highlighted.geojson", driver="GeoJSON"
    )

    print("Saved africa_highlighted.geojson")


if __name__ == "__main__":
    main()
