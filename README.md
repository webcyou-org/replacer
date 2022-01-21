<div align="center">
  <h1><img src="https://user-images.githubusercontent.com/1584153/150356282-e2c68c9d-910f-45b5-844e-2c91535dbe50.png" /></h1>
  <p>
    <strong>Changing image paths with Media Queries.</strong>
  </p>
  <img src="https://user-images.githubusercontent.com/1584153/150440375-4fe7996e-18d7-4a1e-8e8b-fea585911e09.gif" />
</div>

## Usage

```
<script src="./replacer.umd.js"></script>
<script>
    replacer.init();
</script>
```

```
<img data-replace='{"type":"middle","suffix":"_tab"}' src="/path/to/cat.png"  />
```

### Multiple changes

```
<img data-replace='[{"type":"middle","suffix":"_tab"}, {"type":"small","suffix":"_sp"}]' src="/path/to/cat.png"  />
```

## Matching Types

### Scale Type

- large
- middle
- small

```
<img data-replace='{"type":"middle","suffix":"_tab"}' src="/path/to/cat.png"  />
```

### Device Type

- pc
- tab
- sp

```
<img data-replace='{"dtype":"tab","suffix":"_tab"}' src="/path/to/cat.png"  />
```

### Media Queries

```
<img data-replace='{"query":"(max-width: 1200px) and (min-width: 769px)","suffix":"_tab"}' src="/path/to/cat.png"  />
```

## Default BreakPoint

```
{
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)'
},
{
    type: 'middle',
    deviceType: 'tab',
    query: '(max-width: 1200px) and (min-width: 769px)'
},
{
    type: 'small',
    deviceType: 'sp',
    query: '(max-width: 768px)'
}
```

## Creators

**Daisuke Takayama**
* [@webcyou](https://twitter.com/webcyou)
* [@panicdragon](https://twitter.com/panicdragon)
* <https://github.com/webcyou>
* <https://github.com/panicdragon>
* <http://www.webcyou.com/>

## Copyright and license
MIT
