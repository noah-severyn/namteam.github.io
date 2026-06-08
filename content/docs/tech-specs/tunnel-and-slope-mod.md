---
title : "Tunnel and Slope Mod"
description: "Technical specifications for the Tunnel and Slope Mod are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the Tunnel and Slope Mod are located here. This page shows the detailed attributes for each slope mod variant, which is useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2026-06-05T09:44:00+00:00
draft: false
images: []
url: "docs/tech-specs/tunnel-and-slope-mod"
---

{{< feature-guide link="/docs/feature-guides/tunnel-and-slope-mod" >}}

Refer to the main feature guide for an explanation of [vertical curvature](/content/docs/feature-guides/tunnel-and-slope-mod/).
The **Cells for 7.5m** and **Cells for 15m** columns refer to the number of city tiles required to gain 7.5m and 15m, respectively.


## Maxis Default

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 40            | 83.9%         | No                  | N/A                         | 1              | 2             |
| Surface Roads    | Road               | 35            | 70.0%         | No                  | N/A                         | 1              | 2             |
| Surface Roads    | One-way            | 35            | 70.0%         | No                  | N/A                         | 1              | 2             |
| Surface Roads    | Avenue             | 40            | 83.9%         | No                  | N/A                         | 1              | 2             |
| Freeways         | Elevated MHW       | 20            | 36.4%         | No                  | N/A                         | 2              | 3             |
| Freeways         | Ground MHW         | 20            | 36.4%         | No                  | N/A                         | 2              | 3             |
| Freeways         | RealHighway        | 35            | 70.0%         | No                  | N/A                         | 1              | 2             |
| Light Rail       | Elevated Rail      | 25            | 46.6%         | No                  | N/A                         | 2              | 3             |
| Light Rail       | Ground Light Rail  | 25            | 46.6%         | No                  | N/A                         | 2              | 3             |
| Light Rail       | Tram Dual Networks | 40            | 83.9%         | No                  | N/A                         | 1              | 2             |
| Heavy Rail       | RealRailway        | 25            | 46.6%         | No                  | N/A                         | 2              | 3             |
| Heavy Rail       | Hybrid Railway     | 25            | 46.6%         | No                  | N/A                         | 2              | 3             |
| Heavy Rail       | Monorail / HSR     | 25            | 46.6%         | No                  | N/A                         | 25             | 25            |



## Very Easy / Very Steep

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 32.1          | 62.7%         | No                  | N/A                         | 0.75           | 1.5           |
| Surface Roads    | Road               | 25.2          | 47.1%         | No                  | N/A                         | 1              | 2             |
| Surface Roads    | One-way            | 25.2          | 47.1%         | No                  | N/A                         | 1              | 2             |
| Surface Roads    | Avenue             | 25.2          | 47.1%         | No                  | N/A                         | 1              | 2             |
| Freeways         | Elevated MHW       | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Freeways         | Ground MHW         | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Freeways         | RealHighway        | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Light Rail       | Elevated Rail      | 17.9          | 32.3%         | No                  | N/A                         | 1.5            | 3             |
| Light Rail       | Ground Light Rail  | 17.9          | 32.3%         | No                  | N/A                         | 1.5            | 3             |
| Light Rail       | Tram Dual Networks | 25.2          | 47.1%         | No                  | N/A                         | 1              | 2             |
| Heavy Rail       | RealRailway        | 13.7          | 24.4%         | No                  | N/A                         | 2              | 4             |
| Heavy Rail       | Hybrid Railway     | 13.7          | 24.4%         | No                  | N/A                         | 2              | 4             |
| Heavy Rail       | Monorail / HSR     | 13.7          | 24.4%         | No                  | N/A                         | 2              | 4             |



## Easy / Steep

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 25.2          | 47.1%         | No                  | N/A                         | 1              | 2             |
| Surface Roads    | Road               | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Surface Roads    | One-way            | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Surface Roads    | Avenue             | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Freeways         | Elevated MHW       | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Freeways         | Ground MHW         | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Freeways         | RealHighway        | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Light Rail       | Elevated Rail      | 13.7          | 24.4%         | No                  | N/A                         | 2              | 4             |
| Light Rail       | Ground Light Rail  | 13.7          | 24.4%         | No                  | N/A                         | 2              | 4             |
| Light Rail       | Tram Dual Networks | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Heavy Rail       | RealRailway        | 9.2           | 16.2%         | No                  | N/A                         | 3              | 6             |
| Heavy Rail       | Hybrid Railway     | 9.2           | 16.2%         | No                  | N/A                         | 3              | 6             |
| Heavy Rail       | Monorail / HSR     | 9.2           | 16.2%         | No                  | N/A                         | 3              | 6             |



## Moderate / Vanilla style

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 17.5          | 31.5%         | No                  | N/A                         | 1.5            | 3             |
| Surface Roads    | Road               | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Surface Roads    | One-way            | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Surface Roads    | Avenue             | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Freeways         | Elevated MHW       | 9             | 15.8%         | No                  | N/A                         | 3              | 6             |
| Freeways         | Ground MHW         | 9             | 15.8%         | No                  | N/A                         | 3              | 6             |
| Freeways         | RealHighway        | 9             | 15.8%         | No                  | N/A                         | 3              | 6             |
| Light Rail       | Elevated Rail      | 9.2           | 16.2%         | No                  | N/A                         | 3              | 6             |
| Light Rail       | Ground Light Rail  | 9.2           | 16.2%         | No                  | N/A                         | 3              | 6             |
| Light Rail       | Tram Dual Networks | 13.3          | 23.6%         | No                  | N/A                         | 2              | 4             |
| Heavy Rail       | RealRailway        | 6.95          | 12.2%         | No                  | N/A                         | 4              | 8             |
| Heavy Rail       | Hybrid Railway     | 6.95          | 12.2%         | No                  | N/A                         | 4              | 8             |
| Heavy Rail       | Monorail / HSR     | 6.95          | 12.2%         | No                  | N/A                         | 4              | 8             |


## Moderate / NAM Style

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Vertical Curvature Rate (%) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 17.5          | 31.5%         | No                  | N/A                         | N/A                         | 1.5            | 3             |
| Surface Roads    | Road               | 13.3          | 23.6%         | No                  | N/A                         | N/A                         | 2              | 4             |
| Surface Roads    | One-way            | 13.3          | 23.6%         | No                  | N/A                         | N/A                         | 2              | 4             |
| Surface Roads    | Avenue             | 13.3          | 23.6%         | Yes                 | 6.65                        | 11.7%                       | 3              | 5             |
| Freeways         | Elevated MHW       | 9             | 15.8%         | Yes                 | 4.5                         | 7.87%                       | 4              | 7             |
| Freeways         | Ground MHW         | 9             | 15.8%         | Yes                 | 4.5                         | 7.87%                       | 4              | 7             |
| Freeways         | RealHighway        | 9             | 15.8%         | Yes                 | 4.5                         | 7.87%                       | 4              | 7             |
| Light Rail       | Elevated Rail      | 9.2           | 16.2%         | Yes                 | 4.6                         | 8.05%                       | 4              | 7             |
| Light Rail       | Ground Light Rail  | 9.2           | 16.2%         | Yes                 | 4.6                         | 8.05%                       | 4              | 7             |
| Light Rail       | Tram Dual Networks | 13.3          | 23.6%         | Yes                 | 6.65                        | 11.7%                       | 3              | 5             |
| Heavy Rail       | RealRailway        | 4             | 6.99%         | Yes                 | 1.333                       | 2.33%                       | 9              | 16            |
| Heavy Rail       | Hybrid Railway     | 4             | 6.99%         | Yes                 | 1.333                       | 2.33%                       | 9              | 16            |
| Heavy Rail       | Monorail / HSR     | 6.95          | 12.2%         | Yes                 | 2.317                       | 4.05%                       | 6              | 10            |


## Strict / Flat

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Vertical Curvature Rate (%) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 8.9           | 15.7%         | No                  | N/A                         | N/A                         | 3              | 6             |
| Surface Roads    | Road               | 6.7           | 11.7%         | No                  | N/A                         | N/A                         | 4              | 8             |
| Surface Roads    | One-way            | 6.7           | 11.7%         | No                  | N/A                         | N/A                         | 4              | 8             |
| Surface Roads    | Avenue             | 6.7           | 11.7%         | Yes                 | 3.35                        | 5.85%                       | 5              | 9             |
| Freeways         | Elevated MHW       | 5.4           | 9.45%         | Yes                 | 1.8                         | 3.14%                       | 7              | 12            |
| Freeways         | Ground MHW         | 5.4           | 9.45%         | Yes                 | 1.8                         | 3.14%                       | 7              | 12            |
| Freeways         | RealHighway        | 5.4           | 9.45%         | Yes                 | 1.8                         | 3.14%                       | 7              | 12            |
| Light Rail       | Elevated Rail      | 5.55          | 9.72%         | Yes                 | 1.85                        | 3.23%                       | 7              | 12            |
| Light Rail       | Ground Light Rail  | 5.55          | 9.72%         | Yes                 | 1.85                        | 3.23%                       | 7              | 12            |
| Light Rail       | Tram Dual Networks | 6.7           | 11.7%         | Yes                 | 3.35                        | 5.85%                       | 5              | 9             |
| Heavy Rail       | RealRailway        | 3.1           | 5.42%         | Yes                 | 1.55                        | 2.71%                       | 10             | 19            |
| Heavy Rail       | Hybrid Railway     | 3.1           | 5.42%         | Yes                 | 1.55                        | 2.71%                       | 10             | 19            |
| Heavy Rail       | Monorail / HSR     | 4             | 6.99%         | Yes                 | 1.333                       | 2.33%                       | 9              | 16            |


## Realistic / Very Flat

| Network Category | Base Network       | Max Slope (°) | Max Slope (%) | Vertical Curvature? | Vertical Curvature Rate (°) | Vertical Curvature Rate (%) | Cells for 7.5m | Cells for 15m |
|------------------|--------------------|---------------|---------------|---------------------|-----------------------------|-----------------------------|----------------|---------------|
| Street           | Street             | 6.7           | 11.7%         | No                  | N/A                         | N/A                         | 4              | 8             |
| Surface Roads    | Road               | 5.4           | 9.45%         | Yes                 | 2.7                         | 4.72%                       | 6              | 11            |
| Surface Roads    | One-way            | 5.4           | 9.45%         | Yes                 | 2.7                         | 4.72%                       | 6              | 11            |
| Surface Roads    | Avenue             | 5.4           | 9.45%         | Yes                 | 1.8                         | 3.14%                       | 7              | 12            |
| Freeways         | Elevated MHW       | 3.9           | 6.82%         | Yes                 | 1.3                         | 2.27%                       | 9              | 16            |
| Freeways         | Ground MHW         | 3.9           | 6.82%         | Yes                 | 1.3                         | 2.27%                       | 9              | 16            |
| Freeways         | RealHighway        | 3.9           | 6.82%         | Yes                 | 1.3                         | 2.27%                       | 9              | 16            |
| Light Rail       | Elevated Rail      | 4             | 6.99%         | Yes                 | 1.333                       | 2.33%                       | 9              | 16            |
| Light Rail       | Ground Light Rail  | 4             | 6.99%         | Yes                 | 1.333                       | 2.33%                       | 9              | 16            |
| Light Rail       | Tram Dual Networks | 5.4           | 9.45%         | Yes                 | 1.8                         | 3.14%                       | 7              | 12            |
| Heavy Rail       | RealRailway        | 2             | 3.49%         | Yes                 | 0.667                       | 1.16%                       | 15             | 29            |
| Heavy Rail       | Hybrid Railway     | 2             | 3.49%         | Yes                 | 0.667                       | 1.16%                       | 15             | 29            |
| Heavy Rail       | Monorail / HSR     | 3             | 5.24%         | Yes                 | 0.750                       | 1.31%                       | 11             | 21            |
