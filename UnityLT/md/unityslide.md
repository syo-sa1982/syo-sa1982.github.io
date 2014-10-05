# UnityとIDEの話

@syo_sa1982
/[facebook](https://www.facebook.com/syousa1982)
/[github](http://syo-sa1982.github.io/)
/[Qiita](http://qiita.com/syo-sa1982)

---

## 皆さん、Unityでゲーム開発してますか？

---

## C#バリバリ書いてますか？

---

## MonoDevelopでC#書いてますか？

---

## OK,そのMonoDevelopは今すぐ窓から投げ捨てましょう。

---

## I hate MonoDevelop.

---

## MonoDevelopの何が嫌いなのか？

--

### MonoDevelopの嫌いな所

* 日本語が打てない。それだけで致命的
	* ※但しMacのみ  
	* 必要なときにコメント書けないし…
	* そもそも日本語文字列扱うとき、どうすんだよ
		* あまりないだろうけど。
  
(＃＾ω＾)ﾋﾟｷﾋﾟｷ

--

### 痛MonoDevelop使えば解決では？

* 確かに日本語は打てる
* でもたまに挙動がおかしくなる
* 右クリックメニューが使えなくなったり
* コードの整形がうまく行かなかったり
* たまに基底クラス読みに行かなかったり  
  
(＃＃＾ω＾)ﾋﾟｷﾋﾟｷﾋﾟｷﾋﾟｷ

--

![ふざけんな！](images/122906186885d.jpg "ふざけんな！")

---

と、いうわけで「C#といえば、Visual Studioだよね！」  
などと思いつき、Mac上でVisual Studioを  
使おうとしたわけですが、結論から言うと…

--

![なんの成果も得られませんでした！](images/0213.jpg "なんの成果も得られませんでした！")

--

![ガーン！](images/image_20130530213455.jpg "ガーン！")

--

…までは言い過ぎですが、問題点がかなり多かったです。

* 設定めんどい。
	* VMとMacの共有設定とか
* Unityから直接script開こうとするとVSが何重にも立ち上がる
	* これはIDEから管理すると割り切るしかないかも

--

* 動作が不安定
	* VS閉じてるのに勝手に立ち上がったり
	* ソリューションのファイルツリーが読まれなかったり
	* 設定後再起動してみたら、全く動かなかったり
		* 特にここで心折れた
		* でも評価版使ってるからかも？
* なにげに金かかる
	* 一番かかるパターンだと、  
	VMware + Windows + VS製品版 + UnityPro

--

というわけで、実用に耐えうるかは正直微妙。  
（ただ、Microsoftの人に訊けば、解決策を教えてくれるかも。）

参考：[UnityのエディタをVisual Studio Express 2012に変更する](http://naichilab.blogspot.jp/2013/09/unitymacunityvisualstudio.html)
参考：[MacとVisual Studio](http://rainpuzzle.net/wordpress/?p=117)


---

じゃあ、結局不安定な部分を我慢して  
痛MonoDevelop使うしか無いのか？  

それともUnity API関連の補完やスニペットを  
諦めてSublime Textを使うしかないのか？

---

いえいえ、そんなことはありません。  
Xamarinを使いましょう。  
（ここからやっと本題）

---

## ということで、Xamarinを使うことにしてみました。

--

所感としては…

--

### 良かった点
* Unity(OSX)でも日本語を打てちゃう。そう、xamarin studioならね。
* 動作も安定している。今のところは。
* 補完もデフォルトのMonoDevelop並に効いてる

--

参考：[Unity同梱のMonoDevelopだとMacで日本語入力できない問題をXamarin Studioで解決する](http://qiita.com/ariarijp/items/a07078ab89193ea35d17)
参考：[【Unity、Mac】UnityのエディタをXamarin Studioに変更する](http://naichilab.blogspot.jp/2014/03/unitymacunityxamarin-studio.html)

--

## 結論



---

## おまけ
SublimeTextでも対応できる模様  
[SublimeText2でUnity開発するまでに必要なプラグイン集](http://qiita.com/kyusyukeigo/items/e9ac7bc284c884ea8391)

