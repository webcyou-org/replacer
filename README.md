<div align="center">
  <h1><code>Replacer</code></h1>
  <p>
    <strong>Changing image paths with Media Queries.</strong>
  </p>
</div>

## Usage

```
<script src="./replacer.umd.js"></script>
<script>
    replacer.init();
</script>
```

```
<img data-replace='{"type":"middle","suffix":"_tab"}' src="imgpath/cat.png"  />
```

### Multiple changes

```
<img data-replace='[{"type":"middle","suffix":"_tab"}, {"type":"small","suffix":"_tab"}]' src="imgpath/cat.png"  />
```

### Device Type

```
<img data-replace='{"dtype":"tab","suffix":"_tab"}' src="imgpath/cat.png"  />
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
