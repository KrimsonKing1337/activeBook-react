import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { mainSelectors } from 'store/main/reducer';

import ArrowLeft from 'assets/img/toolbar/i-arrow-left.svg';
import ArrowRight from 'assets/img/toolbar/i-arrow-right.svg';

import { Item } from 'components/Toolbar/components/Item';

import { goNextPage, goPrevPage, goToPage } from 'utils/book/goToPage';

import styles from './Nav.scss';

export const Nav = () => {
  const page = useSelector(mainSelectors.page);

  const inputRef = useRef<HTMLInputElement>(null);
  const [goToWithInputIsHide, setGoToWithInputIsHide] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  });

  function prevClickHandler() {
    goPrevPage();
  }

  function nextClickHandler() {
    goNextPage();
  }

  function pageNumberClickHandler() {
    setGoToWithInputIsHide(false);
  }

  function buttonClickHandler() {
    setGoToWithInputIsHide(true);

    const pageNumber = parseInt(inputValue);

    if (page === pageNumber) {
      return;
    }

    goToPage(pageNumber);
  }

  function inputBlurHandler() {
    setGoToWithInputIsHide(true);
  }

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const goToWithArrowsClassNames = classNames({
    [styles.goToWithArrows]: true,
    [styles.isHide]: !goToWithInputIsHide,
  });

  const goToWithInputClassNames = classNames({
    [styles.goToWithInput]: true,
    [styles.isHide]: goToWithInputIsHide,
  });

  /**
   * из-за того, что используется хак для тачей в виде addTouchSupportForCssHover(),
   * придётся отказаться от логики if/else и переключать видимость элементов по-старинке через css-классы.
   * конструкция вида ```isHide && (<div></div>)``` удаляет элемент физически из DOM-а.
   * и функция addTouchSupportForCssHover не может при инициализации приложения накинуть соответствующие обработчики.
   *
   * есть второй путь: при ре-рендере каждый раз запускать addTouchSupportForCssHover(),
   * но мне кажется, что это будет слишком "дорого" и неудобно.
   * возможно, вернусь к этому позже
   * */
  return (
    <>
      <div className={goToWithArrowsClassNames}>
        <Item onClick={prevClickHandler}>
          <ArrowLeft />
        </Item>

        <div className={styles.pageNumber} onClick={pageNumberClickHandler}>
          {page} из 135
        </div>

        <Item onClick={nextClickHandler}>
          <ArrowRight />
        </Item>
      </div>

      <div className={goToWithInputClassNames}>
        <div className={styles.wrapperInput}>
          <input
            ref={inputRef}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            className={styles.input}
            type="number"
            min="0"
            inputMode="numeric"
            value={inputValue}
            pattern="[0-9]"
            placeholder="1"
          />
        </div>

        {/* onClick отрабатывает позже onBlur у input-а выше, поэтому используется onMouseDown */}
        <button className={styles.button} onMouseDown={buttonClickHandler}>
          Перейти
        </button>
      </div>
    </>
  );
};
