<center><h1>💀 Ng-Skeleton-Loading</h1></center>

## Preview

![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-d27879f3960c1-gif.html)

## Overview ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-2855151393cb1-png.html)

#### Make beautiful, animated loading skeletons that automatically adapt to your app.

## Dependencies ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-1b1914ff76cf1-png.html)

&nbsp;

#### The minimal supported versions are:

| ng-skeleton-loading | Minimum Angular |
| :--------------:    | :------:        |
| 0.0.16              | >= 16           |
| 0.0.14              | >= 9            |
| 🤌                  | >= 2            |

&nbsp;

## Links

#### [Github Link -> ng skeleton loading](https://github.com/Ramin-Mehrabanian/ng-skeleton-loading)

#### [NPM Link -> ng skeleton loading](https://www.npmjs.com/package/ng-skeleton-loading)

#### [Medium Link -> ng skeleton loading](https://medium.com/@ramin.77.051/ng-skeleton-loading-883bdf67fb10)

## Install ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-7d122b29fcf33-png.html)

```
npm i ng-skeleton-loading --save
```

## Usage ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-23afb7e50f951-png.html)

#### 1. Add ```SkeletonLoadingModule``` to your module's ```imports```

```
import { NgModule } from '@angular/core';

import { SkeletonLoadingModule } from 'ng-skeleton-loading';

@NgModule({
  declarations: [ ... ],
  imports: [ SkeletonLoadingModule ],
  bootstrap: [ ... ]
})
```

#### 2. And then use this attr in any html empty tags

```
<div skeleton skeletonWidth="100%" skeletonHeight="4rem" skeletonRounding="small"></div>

<p skele...></p> , <h1 skele...></h1> , <button skele...></button> , ...
```

#### 3. And import css in main styles

```
@import url('../node_modules/ng-skeleton-loading/src/assets/css/ng-skeleton-loading.css');
```

## Options ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-1433ef39d4861-png.html)

* [skeleton](#)
* [skeletonWidth](#)
* [skeletonHeight](#)
* [skeletonRounding](#)

## Tables ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-1b1914ff76cf1-png.html)

| Property         | Type   | Required |                                                     |
| :--------------: | :----: | :------: | :-------------------------------------------------: |
| skeletonWidth    | string | Optional | Defines the width in px , rem , ... (default: 100%) |
| skeletonHeight   | string | Optional | Defines the height in px , rem , ... (default: 0)   |
| skeletonRounding | string | Optional | Displays the component as a small , large , circle , ... (default: none)  |

## Donation ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-aaaa3dd43ca81-png.html)

#### If this project help you reduce time to develop, you can donate me a cup of coffee ...

**<a href="#" target="_blank" style="display: flex; align-items: center; gap: 10px;"> <img src="https://up.maralhost.com/imagef-de42c569a1131-png.html" /> Buy me a coffee </a>**

## License ![Ng-Skeleton-Loading](https://up.maralhost.com/imagef-503b00d2561f1-png.html)

**<a href="https://github.com/Ramin-Mehrabanian" target="_blank" style="display: flex; align-items: center; gap: 10px;"> <img src="https://up.maralhost.com/imagef-b6e18723b9071-png.html" /> © Ramin Mehrabanian </a>**