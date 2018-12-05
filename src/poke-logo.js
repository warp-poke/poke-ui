import { LitElement, html } from '@polymer/lit-element';


class PokeLogo extends LitElement {

  render() {
    return html`
    <style>
      :host {
        display: block;
      }
      .poke-logo {
        fill: #fff;
        width: 12rem;
        height: 3.5rem;
      }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" class="poke-logo" width="96" height="24" viewBox="0 0 25.4 6.35">
      <path d="M.807.19a.092.092 0 0 0-.074.032.093.093 0 0 0-.018.08C.719.323.72.324.849.449l.129.125L.96.586c-.04.027-.054.06-.045.1C.92.708.92.708.903.715.866.727.84.785.853.823.857.832.856.837.85.839a.12.12 0 0 0-.033.025C.797.882.792.889.789.907a.146.146 0 0 0 0 .041c.002.018.007.024.114.13l.111.11.062.03c.06.028.106-.008.173.053.079.073.347.15.362.691.015.302-.23.766-.233 1.045-.004.545.547.628 1.096.514-.482.21-.95.292-1.403.519-.076.038-.285.048-.398.025-.125-.024-.138-.03-.192-.07-.034-.024-.05-.06-.073-.09l-.01-.017c-.075-.408.13-.51.192-.568.054-.05.092-.02.14-.043l.05-.023.091-.09c.087-.085.092-.09.094-.105v-.032C.961 3.01.957 3.006.941 2.992c-.012-.01-.023-.02-.027-.02C.909 2.97.91 2.966.913 2.958c.012-.03-.011-.077-.041-.087-.013-.005-.013-.006-.009-.024.007-.033-.005-.06-.037-.081l-.013-.01.105-.101c.104-.1.104-.102.109-.12a.079.079 0 0 0-.014-.064.074.074 0 0 0-.06-.026H.951c-.028 0-.042.01-.147.111-.088.085-.098.094-.107.093-.005 0-.074.005-.133.012-.119.015-.15.054-.165.089-.007.015-.006.038.012.11.013.055.03.1.032.118l.001.028-.054.052c-.152.146-.36.475-.286.86v.007l.001.004h.001c.038.137.049.217.154.334.198.219.459.256.808.193.14-.026.482-.185.73-.26.253-.075.441-.062.974-.233-.271.282-.737.422-1.023.45l.003.003c-.339.068-.707.54-.826.771l-.043.083-.033.008c-.021.004-.082 0-.151.004-.092.005-.118.011-.134.025-.036.031-.072.081-.047.227.013.072.031.156.034.161.004.01-.003.026-.071.16-.082.16-.09.18-.081.213h.001a.09.09 0 0 0 .133.055c.02-.01.02-.012.102-.17l.082-.161.016.013c.038.03.073.034.109.013.02-.011.02-.01.031.003.023.033.087.042.118.017.008-.006.013-.007.017-.001.002.005.018.014.033.024.024.014.031.016.05.014a.184.184 0 0 0 .04-.011c.015-.008.02-.015.09-.148l.073-.14.01-.066c.009-.065-.039-.1 0-.182.047-.096.042-.375.555-.547a.943.943 0 0 1 .249-.045l-.002-.003a2.11 2.11 0 0 0 .653-.151c.265-.13.399-.223.496-.394a.649.649 0 0 1 .082-.147.53.53 0 0 1 .127.088c.07.075.021.019.167.213.242.321.347.503.412.716a.65.65 0 0 1 .03.233c.002.127 0 .141-.03.202-.017.038-.048.06-.074.09l-.015.013c-.384.154-.526-.025-.594-.075-.06-.044-.038-.086-.07-.13l-.033-.044-.106-.07c-.1-.068-.107-.072-.121-.071A.227.227 0 0 0 3 5.213c-.015.005-.02.01-.03.03a.117.117 0 0 0-.014.03c0 .005-.005.005-.013.004-.032-.006-.073.026-.078.058-.002.013-.003.013-.021.013-.033 0-.057.016-.072.052l-.007.015-.12-.083c-.119-.082-.12-.082-.138-.083a.08.08 0 0 0-.06.027.073.073 0 0 0-.015.064v.001c.006.028.02.039.14.121.1.07.11.077.112.086 0 .005.02.073.038.129.038.113.082.136.12.144.016.004.038-.002.105-.034.051-.024.093-.05.11-.055l.026-.007.062.043c.174.119.538.257.9.108h.005l.002-.002.005-.001V5.87c.125-.063.219-.094.312-.221.175-.238.143-.496.01-.825a2.27 2.27 0 0 0-.244-.44c-.026-.052-.05-.097-.073-.175-.018-.06.036-.05.062-.016.201.254.3.286.543.366.166.054.28.11.367.183.158.13.218.278.185.42-.198.343-.167.595.114.867.065.061.03.1.066.14l.038.039.115.056c.108.054.115.057.129.054a.145.145 0 0 0 .03-.01c.015-.008.019-.013.027-.034l.01-.031c0-.006.003-.008.011-.008.032.002.07-.034.07-.066.001-.015.001-.015.02-.017.033-.003.054-.023.064-.06l.006-.016.13.066c.128.066.13.064.147.063a.078.078 0 0 0 .056-.034.074.074 0 0 0 .006-.065v-.002c-.01-.027-.024-.036-.154-.102-.108-.056-.12-.062-.122-.071a2.524 2.524 0 0 0-.055-.122c-.053-.108-.1-.124-.138-.127-.017-.001-.038.007-.1.047-.047.031-.086.063-.101.07l-.026.01-.067-.034c-.19-.097-.158-.27-.017-.484h-.002a.576.576 0 0 0 .072-.312.653.653 0 0 0-.186-.482c-.083-.084-.212-.149-.407-.205-.17-.12-.289-.179-.37-.283.084.04.165.071.236.093.267.08.732.052 1.016.156.513.175.507.453.553.55.04.082-.01.116 0 .181l.01.068.073.14c.07.132.073.14.09.147a.15.15 0 0 0 .038.012c.019.003.027 0 .05-.014.015-.01.03-.02.033-.024.004-.006.01-.005.017.001.031.025.095.016.118-.016.011-.014.011-.014.031-.003.036.021.071.016.109-.013l.016-.013.082.16c.08.16.082.161.1.172a.094.094 0 0 0 .082.006.092.092 0 0 0 .053-.061c.01-.033.002-.053-.079-.213-.068-.134-.075-.15-.071-.16.002-.005.022-.089.034-.16.026-.146-.01-.196-.046-.228-.016-.013-.042-.02-.133-.025-.07-.005-.13-.002-.151-.006l-.033-.007-.042-.084c-.12-.234-.49-.712-.831-.777-.336-.063-.584-.086-.868-.167a1.055 1.055 0 0 1-.127-.072c.072.003.141.004.2.004.128 0 .593-.05.813-.239.267-.23.33-.308.478-.313a.743.743 0 0 1 .177.086c.364.244.301.46.317.546.014.073-.032.09-.038.142l-.007.055.028.124c.026.119.028.125.039.135a.188.188 0 0 0 .028.017c.014.006.02.006.042-.001.013-.005.028-.01.03-.012.005-.004.009-.001.014.005.019.026.07.033.096.013.011-.008.011-.008.025.004.023.024.052.028.087.012l.016-.005.03.143c.03.141.03.142.043.155.018.017.04.024.062.022a.074.074 0 0 0 .055-.037v-.001c.015-.024.013-.041-.017-.184-.025-.119-.027-.132-.022-.14.003-.003.035-.066.06-.12.051-.108.034-.154.013-.186-.01-.014-.03-.025-.1-.048-.054-.018-.102-.027-.117-.035l-.025-.013-.015-.074c-.044-.208-.234-.661-.486-.783-.027-.013-.054-.022-.08-.033a.659.659 0 0 0-.277-.078c-.212.006-.36.01-.629.239a.997.997 0 0 1-.671.253c-.107-.003-.434.01-.434-.039 0-.023.147.007.267-.003a.587.587 0 0 0 .277-.082c.09-.048.192-.137.305-.237h.001c.002 0 .003-.003.004-.004l.01-.009-.002-.001.028-.036a2.584 2.584 0 0 0 .728-1.271c.026-.065.067-.044.11-.093l.045-.052.058-.146c.055-.139.057-.146.053-.164a.15.15 0 0 0-.017-.037c-.01-.016-.017-.02-.044-.028-.016-.005-.034-.011-.04-.01-.006 0-.009-.003-.01-.014 0-.04-.05-.083-.089-.079-.018.001-.018.001-.022-.021C6.334.94 6.307.915 6.26.906L6.24.902l.068-.167c.067-.165.068-.167.064-.188a.094.094 0 0 0-.048-.066.093.093 0 0 0-.082 0c-.031.015-.041.033-.109.2-.057.139-.064.155-.074.158a1.818 1.818 0 0 0-.145.08c-.127.076-.14.135-.141.182 0 .021.012.045.067.118.043.056.085.1.096.117l.016.03-.006.163s-.052.566-.551.987v.004c-.047.03-.106.057-.146.093-.161.105-.21.185-.36.185-.167 0-.32.014-.404-.07-.074-.074-.07-.1.05-.31.17-.304.246-.785.17-1.08a1.018 1.018 0 0 0-.553-.655.874.874 0 0 0-.41-.103.76.76 0 0 0-.59.27c-.07.082-.154.255-.187.384-.052.206-.061.402-.033.738.022.275.023.501 0 .594a.684.684 0 0 1-.227.368c-.605.25-.894.08-.891-.055.007-.296.139-.567.178-.906.039-.344-.309-.84-.497-1.024L1.428.885 1.431.85c.003-.021.024-.078.04-.146.022-.089.024-.116.015-.136C1.467.526 1.43.478 1.283.46A2.088 2.088 0 0 0 1.12.444c-.01 0-.024-.01-.132-.115C.858.204.842.19.807.189zm14.736.99a2.68 2.68 0 0 0-.388.025.836.836 0 0 0-.294.087.686.686 0 0 0-.232.182c-.067.08-.13.181-.188.306l-1.27 2.817a.672.672 0 0 0-.076.263c0 .133.053.242.157.325.1.084.244.126.432.126h1.34c.145 0 .275-.006.387-.018a1.06 1.06 0 0 0 .3-.088.695.695 0 0 0 .226-.188 1.34 1.34 0 0 0 .188-.307l1.283-2.817a.617.617 0 0 0 .068-.263.396.396 0 0 0-.156-.325c-.104-.084-.25-.125-.438-.125h-1.34zm-4.506 0l-.407.908h1.49c.07 0 .125.016.162.05a.168.168 0 0 1 .057.132.236.236 0 0 1-.019.093l-.15.35h-1.821l-1.19 2.598h1.196l.776-1.69h1.133c.13 0 .24-.007.331-.019a.606.606 0 0 0 .245-.08.652.652 0 0 0 .187-.17c.054-.07.109-.167.163-.288l.532-1.17a.607.607 0 0 0 .069-.257.404.404 0 0 0-.157-.332c-.1-.083-.244-.125-.432-.125h-2.165zm7.445 0l-.413.908h3.041l.413-.908h-.85c-.134 0-.247.01-.339.031a.88.88 0 0 0-.413.195c-.054.046-.11.096-.169.15l-.513.513.438-.889h-1.195zm4.388 0l-.413.908h2.247l.413-.908H22.87zm-19.001.51c.135 0 .243.187.243.418 0 .23-.108.418-.243.418s-.244-.187-.244-.418c0-.231.11-.418.244-.418zm-.554.065c.113 0 .206.158.206.353 0 .196-.092.355-.206.355-.115 0-.207-.159-.207-.355 0-.195.093-.353.207-.353zm12.465.333c.076 0 .134.016.176.05a.16.16 0 0 1 .062.132.28.28 0 0 1-.025.093l-.807 1.778c-.084.175-.207.263-.37.263-.175 0-.262-.058-.262-.175 0-.042.008-.08.025-.113l.8-1.765a.41.41 0 0 1 .401-.263zm3.34.626h-1.34l-1.176 2.598H17.8l.77-1.69h.15c.063 0 .113.006.15.018a.247.247 0 0 1 .107.063.38.38 0 0 1 .075.112c.025.042.052.094.082.157l.62 1.34h1.188l-.963-1.954c-.217-.43-.504-.644-.858-.644zm3.055 0L20.993 5.31h2.246l.413-.907h-1.05l.356-.783h1.051l.413-.907h-2.247z"/>
            </svg>
    `;
  }
}

window.customElements.define('poke-logo', PokeLogo);