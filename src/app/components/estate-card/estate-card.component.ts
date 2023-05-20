import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estate-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstateCardComponent {
  @Input() designation!: string;
  @Input() area!: string;
  @Input() price!: string;
  @Input() totalPrice!: string;
}
