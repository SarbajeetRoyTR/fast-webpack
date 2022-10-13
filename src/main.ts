import {
    provideFASTDesignSystem,
    fastCard,
    fastButton
  } from '@microsoft/fast-components';

import {buttonDefinition} from './button';
import "./main.scss";
import { Navigation} from './navigation';
import { demoCard } from './card';
import { fastAttribution } from './attribution';

Navigation;

  provideFASTDesignSystem()
      .register(
          fastButton(),
          fastCard(),
          buttonDefinition(),
          demoCard(),
          fastAttribution()
      );
