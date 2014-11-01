# UnityとIDEの話

@syo_sa1982
/[facebook](https://www.facebook.com/syousa1982)
/[github](https://github.com/syo-sa1982)
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

### ↓

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
* というかそもそも重い 
  
(＃＃＾ω＾)ﾋﾟｷﾋﾟｷﾋﾟｷﾋﾟｷ

--

![ふざけんな！](images/122906186885d.jpg "ふざけんな！")

---

と、いうわけで「C#といえば、Visual Studioだよね！」  
などと思いつき、Mac上でVisual Studioを  
使おうとしたわけですが、結論から言うと…

### ↓

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
XamarinStudioを使いましょう。  
（ここからやっと本題）

---

## ということで、XamarinStudioを使うことにしてみました。


### ↓

--

### XamarinStudioとは
* Xamarin社が提供している統合開発環境
* 中身のランタイムはMonoDevelopと同じ
* その他の詳しい説明は下記参照

[Xamarinを構成するソフトウェア。その主要な10要素とは？](http://www.buildinsider.net/mobile/insidexamarin/01) 

--

### インストール手順とか
1. XamarinStudioとMono GTK#をインストール。
	* ここからDL：[http://monodevelop.com/Download](http://monodevelop.com/Download) 
	* Mono GTK#はMREとMDK両方要るかも。
1. インストール後XamarinStudioを起動。  
   アップデートを求められるので、指示に従い操作。
1. Unityを起動して、Preference -> External Tools から、  
   External Script EditorをXamarinStudioに指定。
1. Asset -> Sync MonoDevelop Projectsをクリック
	* この操作はUnity起動するたびに必要
	* この操作をせずにUnityから直接script開くと、  
	  補完が効かなかったりファイルツリーが表示されなかったり。

--

### 良かった点
* 日本語打てる。
* 動作も安定している。今のところは。
* 補完もデフォルトのMonoDevelop並に効いてる
* セットアップするまでは比較的、楽

--

### 微妙な点
* 起動するまでが少しだけめんどくさい
	* でもまだ許容範囲だと思う
* カラースキームとかもう少し楽に設定できたらいいのにと思うことはある。

--

参考：[Unity同梱のMonoDevelopだとMacで日本語入力できない問題をXamarin Studioで解決する](http://qiita.com/ariarijp/items/a07078ab89193ea35d17)  
参考：[【Unity、Mac】UnityのエディタをXamarin Studioに変更する](http://naichilab.blogspot.jp/2014/03/unitymacunityxamarin-studio.html)

--

## 結論

##XamarinStudioは使える子です。

---

## おまけ
SublimeTextでも対応できる模様  
[SublimeText2でUnity開発するまでに必要なプラグイン集](http://qiita.com/kyusyukeigo/items/e9ac7bc284c884ea8391)  
[CompleteSharpでUnityスクリプトの補完方法](http://qiita.com/kyusyukeigo/items/a33388572990932bba87)

